import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

export default function ToggleSidebar({ isOpen, toggleSidebar }) {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = useCallback(
        (sectionClass) => {
            if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: sectionClass } });
            } else {
                const section = document.querySelector(`.${sectionClass}`);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        },
        [navigate, location.pathname]
    );

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.querySelector(
                `.${location.state.scrollTo}`
            );
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
            navigate("/", { replace: true, state: {} });
        }
    }, [location, navigate]);

    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                type: "tween",
                duration: 0.2,
                ease: "easeOut",
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
        closed: {
            x: "100%",
            transition: {
                type: "tween",
                duration: 0.2,
                ease: "easeIn",
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const menuItemVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        closed: { x: 100, opacity: 0, transition: { duration: 0.2 } },
    };

    const menuItems = [
        { title: "Services", target: "services" },
        { title: "Works", target: "portfolio" },
        { title: "Team", target: "team" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={toggleSidebar}
                >
                    <motion.div
                        className="fixed right-0 top-0 bottom-0 w-[240px] sm:w-[300px] bg-white shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                        variants={sidebarVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="flex items-center justify-between border-b px-4 py-2">
                            <h2 className="text-lg font-semibold">
                                Sidebar Menu
                            </h2>
                            <button
                                onClick={toggleSidebar}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                aria-label="Close Sidebar"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <motion.nav className="flex flex-col p-4 space-y-2 overflow-hidden">
                            <motion.button variants={menuItemVariants}>
                                <NavLink
                                    to="/"
                                    className={`block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 text-left ${
                                        location.pathname === "/"
                                            ? "bg-gray-100"
                                            : ""
                                    }`}
                                >
                                    Home
                                </NavLink>
                            </motion.button>
                            <motion.button variants={menuItemVariants}>
                                <NavLink
                                    to="/detail"
                                    className={`block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 text-left ${
                                        location.pathname === "/detail"
                                            ? "bg-gray-100"
                                            : ""
                                    }`}
                                >
                                    Project
                                </NavLink>
                            </motion.button>
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item.title}
                                    onClick={() => scrollToSection(item.target)}
                                    className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 text-left"
                                    variants={menuItemVariants}
                                >
                                    {item.title}
                                </motion.button>
                            ))}
                        </motion.nav>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

ToggleSidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};
