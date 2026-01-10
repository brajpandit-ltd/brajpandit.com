import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common";

interface BlogCardProps {
    id: number;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
}

const BlogCard = ({ id, title, category, image, excerpt, date, slug }: BlogCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 w-full bg-gray-100">
                {/* Using a placeholder if image fails or for now since we don't have real assets */}
                <Image
                    src={image} // In real app, this would be a real path or external URL
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // Adding a blur data URL or placeholder logic would be good here
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider shadow-sm">
                    {category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="text-gray-400 text-xs font-medium mb-3 flex items-center gap-2">
                    <span>📅 {date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-secondary transition-colors">
                    <Link href={`#` /* Link to detail page eventually */}>{title}</Link>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {excerpt}
                </p>

                <div className="mt-auto">
                    <Link href={`#`}>
                        <Button variant="secondary" label="Read Article" size="small" className="w-full" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
