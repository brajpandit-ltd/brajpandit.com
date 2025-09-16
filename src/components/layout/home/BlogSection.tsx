// 'use client';

// import React, { useEffect, useState, useRef } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import {
//   FaArrowRight,
//   FaCalendarAlt,
//   FaUser,
//   FaEye,
//   FaHeart,
//   FaBookOpen,
// } from 'react-icons/fa';
// import { MdTrendingUp, MdNewReleases } from 'react-icons/md';

// const getAllBlogs: any[] = [];

// interface Blog {
//   _id: string;
//   title: string;
//   description?: string;
//   content?: string;
//   imageUrl: string;
//   createdAt: string;
// }

// const BlogSection: React.FC = () => {
//   const { t } = useTranslation();
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await getAllBlogs({ page: 1, limit: 15 });
//         setBlogs(res?.data || []);
//       } catch (err) {
//         console.error('Error fetching blogs', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   useEffect(() => {
//     const container = scrollRef.current;
//     const scrollSpeed = 1;
//     const interval = 20;

//     const startAutoScroll = () => {
//       if (!scrollIntervalRef.current) {
//         scrollIntervalRef.current = setInterval(() => {
//           if (container && !isPaused) {
//             if (
//               container.scrollLeft + container.clientWidth >=
//               container.scrollWidth
//             ) {
//               container.scrollLeft = 0;
//             } else {
//               container.scrollLeft += scrollSpeed;
//             }
//           }
//         }, interval);
//       }
//     };

//     const stopAutoScroll = () => {
//       if (scrollIntervalRef.current) {
//         clearInterval(scrollIntervalRef.current);
//         scrollIntervalRef.current = null;
//       }
//     };

//     startAutoScroll();
//     return () => stopAutoScroll();
//   }, [isPaused]);

//   const formatDate = (dateString: string): string =>
//     new Date(dateString).toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric',
//     });

//   const LoadingSkeleton = () => (
//     <div className="min-w-[320px] max-w-[320px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-100 dark:border-gray-700 p-6 animate-pulse">
//       <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-xl mb-4" />
//       <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
//       <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
//       <div className="flex gap-2 mb-4">
//         <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16" />
//         <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20" />
//       </div>
//       <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded" />
//     </div>
//   );

//   return (
//     <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
//       {/* Background Decorations */}
//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 dark:bg-yellow-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-200/20 dark:bg-orange-500/10 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-100/10 to-yellow-100/10 dark:from-yellow-500/5 dark:to-orange-500/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col md:flex-row items-center justify-between mb-16"
//         >
//           <div className="flex items-center gap-3 mb-6 md:mb-0">
//             <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
//               <FaBookOpen className="text-white text-xl" />
//             </div>
//             <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600 dark:from-yellow-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
//               {t('homeblog.heading')}
//             </h2>
//             <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
//               <MdNewReleases className="text-white text-xl" />
//             </div>
//           </div>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Link
//               href="/blogs"
//               className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               <span>{t('view_more')}</span>
//               <FaArrowRight />
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Blog Carousel */}
//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="overflow-x-auto scrollbar-hide"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//             onTouchStart={() => setIsPaused(true)}
//             onTouchEnd={() => setIsPaused(false)}
//           >
//             <div className="flex gap-6 px-2 w-fit">
//               {loading
//                 ? Array.from({ length: 6 }).map((_, i) => (
//                     <LoadingSkeleton key={i} />
//                   ))
//                 : blogs.map((blog, i) => (
//                     <motion.div
//                       key={blog._id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: i * 0.1 }}
//                       className="group min-w-[320px] max-w-[320px] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-orange-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 dark:hover:shadow-yellow-500/20 transition-all duration-500"
//                     >
//                       <div className="relative h-48 overflow-hidden">
//                         <img
//                           src={blog.imageUrl}
//                           alt={blog.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                         />
//                         <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
//                           <MdTrendingUp />
//                           Latest
//                         </div>
//                         <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-orange-600 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
//                           5 min read
//                         </div>
//                       </div>
//                       <div className="p-6 space-y-4">
//                         <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
//                           <div className="flex items-center gap-1">
//                             <FaUser className="text-orange-500" />
//                             <span>Admin</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <FaCalendarAlt className="text-orange-500" />
//                             <span>{formatDate(blog.createdAt)}</span>
//                           </div>
//                         </div>
//                         <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-2 leading-tight">
//                           {blog.title}
//                         </h3>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
//                           {blog.description ||
//                             blog.content?.substring(0, 100) + '...'}
//                         </p>
//                         <div className="flex flex-wrap gap-2">
//                           <span className="bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full text-xs font-medium">
//                             Spirituality
//                           </span>
//                           <span className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
//                             Devotion
//                           </span>
//                         </div>
//                         <Link
//                           href={`/blogs/${blog._id}`}
//                           className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                         >
//                           {t('homeblog.read_more')} <FaArrowRight />
//                         </Link>
//                       </div>
//                     </motion.div>
//                   ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;
