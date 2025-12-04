"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
    className?: string;
    gradient?: string;
}

export function LinkCard({
    title,
    description,
    href,
    icon,
    className,
    gradient = "from-blue-500/20 to-purple-500/20",
}: LinkCardProps) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="block group">
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10",
                    className
                )}
            >
                <div
                    className={cn(
                        "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br",
                        gradient
                    )}
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                            {icon && (
                                <div className="rounded-lg bg-white/10 p-2 text-white/80 ring-1 ring-white/20 transition-colors group-hover:bg-white/20 group-hover:text-white">
                                    {icon}
                                </div>
                            )}
                            <h3 className="font-semibold text-white/90 transition-colors group-hover:text-white">
                                {title}
                            </h3>
                        </div>
                        <p className="text-sm text-white/60 transition-colors group-hover:text-white/80">
                            {description}
                        </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-white/40 transition-colors group-hover:text-white/80" />
                </div>
            </motion.div>
        </Link>
    );
}
