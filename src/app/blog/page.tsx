import type { Metadata } from "next";
import React from "react";
import blogData from "@/constants/blog.json";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
    title: "Braj Blogs | Spiritual Insights from Mathura & Vrindavan",
    description: "Read latest articles about Mathura, Vrindavan, Radha Krishna, Temples, and Braj Yatra guides.",
};

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-gray-50/50">
            <main className="w-full">
                {/* Hero Video Section */}
                <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center text-center overflow-hidden mb-12">
                    {/* Background Video */}
                    <video
                        src="/assets/videos/geeta_video.mp4"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

                    {/* Hero Content */}
                    <div className="relative z-10 px-4 sm:px-8 max-w-4xl text-white mt-10">
                        <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-3 block animate-pulse">
                            Divine Knowledge
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
                            Braj <span className="text-orange-500">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            Explore the spiritual heritage of Mathura and Vrindavan through our curated articles on temples, festivals, and the eternal love of Radha-Krishna.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 pb-16">

                    {/* Categories Filter (Visual Only for now) */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {["All", "Mathura", "Vrindavan", "Temples", "Krishna & Radha"].map((cat) => (
                            <button
                                key={cat}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${cat === "All"
                                    ? "bg-secondary text-white shadow-lg shadow-secondary"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-orange-200 hover:text-orange-600"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((post) => (
                            <BlogCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                category={post.category}
                                image={post.image}
                                excerpt={post.excerpt}
                                date={post.date}
                                slug={post.slug}
                            />
                        ))}
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="mt-20 bg-orange-100 rounded-3xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold text-orange-900 mb-4">Stay Connected with Braj</h3>
                        <p className="text-orange-800 mb-8 max-w-xl mx-auto">
                            Join our community to receive daily darshan, festival updates, and spiritual articles directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-full border border-orange-200 focus:outline-none focus:border-orange-500 flex-1 "
                            />
                            <button className="bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors shadow-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default BlogPage;
