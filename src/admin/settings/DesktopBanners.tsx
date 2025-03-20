import React, { useEffect, useState, useRef, Suspense, useMemo } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Skeleton } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import MyButton from '../../components/buttons/MyButton';
import { MdPublish } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getDesktopBannerImageRedux } from '../../redux/features/banners';
import { toast } from 'react-toastify';

const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const DesktopBanners: React.FC = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch<AppDispatch>();
    const desktopBanners = useSelector((state: RootState) => state.banners?.desktop) ?? [];

    // Store the initial file list
    const initialFileList = useRef<UploadFile[]>([]);
    const hasChanges = useMemo(() => (
        JSON.stringify(initialFileList.current) !== JSON.stringify(fileList)
    ), [fileList, initialFileList.current]);


    useEffect(() => {
        if (desktopBanners.length > 0) {
            setLoading(true);
            Promise.all(
                desktopBanners.map((filename) =>
                    new Promise<UploadFile>((resolve) => {
                        dispatch(getDesktopBannerImageRedux({
                            filename,
                            callback: (blob: Blob) => {
                                resolve({
                                    uid: filename,
                                    name: filename,
                                    status: 'done',
                                    url: URL.createObjectURL(blob),
                                });
                            }
                        }));
                    })
                )
            ).then((files) => {
                setFileList(files);
                initialFileList.current = files; // Store the initial state
                setLoading(false);
            });
        }
    }, [desktopBanners, dispatch]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as File);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

    // Function to detect changes and handle publish action
    const onPublish = () => {
        // Compare the current fileList with initialFileList

        if (hasChanges) {
            toast.success('Yes, changes detected. Proceed with publishing.');
            // Add API call to save changes
        } else {
            toast.error('Desktop banners changes not found.')
            // console.log('No changes detected.');
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <Suspense fallback={<Skeleton active className='animate-pulse' />}>
            <section className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h2>Desktop Banners</h2>
                    <MyButton
                        className='bg-blue-700 py-1 flex justify-center items-center gap-x-1 uppercase'
                        disabled={!hasChanges}
                        onClick={onPublish}
                    >
                        <MdPublish size={18} />
                        <span>Publish</span>
                    </MyButton>
                </div>
                <div className='w-full my-2'>
                    {loading ? (
                        <div className='w-full grid grid-cols-4 gap-4'>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className='w-full h-32 bg-gray-300 rounded-lg animate-pulse'></div>
                            ))}
                        </div>
                    ) : (
                        <Upload
                            // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            beforeUpload={() => false}
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                    )}
                    {previewImage && (
                        <Image
                            wrapperStyle={{ display: 'none' }}
                            preview={{
                                visible: previewOpen,
                                onVisibleChange: (visible) => setPreviewOpen(visible),
                                afterOpenChange: (visible) => !visible && setPreviewImage(''),
                            }}
                            src={previewImage}
                        />
                    )}
                </div>
            </section>
        </Suspense>
    );
};

export default DesktopBanners;
