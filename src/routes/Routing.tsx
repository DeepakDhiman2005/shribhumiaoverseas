import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import pages from "../configs/pages";
import PageLoader from "../components/loaders/PageLoader";

const Routing: React.FC = () => {
    const { pathname, search } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, search]); // Runs on every route change

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {pages.map(({ path, element, meta, children }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <MetaWrapper title={meta.title} description={meta.description}>
                                {element}
                            </MetaWrapper>
                        }
                    >
                        {children &&
                            children.map((child) => (
                                <Route
                                    key={child.path}
                                    path={child.path}
                                    element={
                                        <MetaWrapper title={child.meta.title} description={child.meta.description}>
                                            {child.element}
                                        </MetaWrapper>
                                    }
                                />
                            ))}
                    </Route>
                ))}
            </Routes>
        </Suspense>
    );
};

const MetaWrapper: React.FC<{ title?: string; description?: string; children: React.ReactNode }> = ({ title, description, children }) => {
    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            const metaDescription = document.querySelector("meta[name='description']");
            if (metaDescription) {
                metaDescription.setAttribute("content", description);
            } else {
                const meta = document.createElement("meta");
                meta.name = "description";
                meta.content = description;
                document.head.appendChild(meta);
            }
        }
    }, [title, description]);

    return <>{children}</>;
};

export default Routing;
