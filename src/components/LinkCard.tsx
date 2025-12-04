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
    compact?: boolean;
}

export function LinkCard({
    title,
    description,
    href,
    icon,
    className,
    gradient = "from-blue-500/20 to-purple-500/20",
    compact = false,
}: LinkCardProps) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="block group h-full">
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10 h-full",
                    compact ? "p-4" : "p-6",
                    className
                )}
            >
                <div
                    className={cn(
                        "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br",
                        gradient
                    )}
                />

                <div className="relative z-10 flex items-start justify-between gap-3 h-full">
                    <div className="flex-1 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-2">
                            {icon && (
                                <div className={cn(
                                    "rounded-lg bg-white/10 text-white/80 ring-1 ring-white/20 transition-colors group-hover:bg-white/20 group-hover:text-white",
                                    compact ? "p-1.5" : "p-2"
                                )}>
                                    {icon}
                                </div>
                            )}
                            <h3 className={cn(
                                "font-semibold text-white/90 transition-colors group-hover:text-white leading-tight",
                                compact ? "text-sm" : "text-base"
                            )}>
                                {title}
                            </h3>
                        </div>
                        <p className={cn(
                            "text-white/60 transition-colors group-hover:text-white/80 line-clamp-2",
                            compact ? "text-xs" : "text-sm"
                        )}>
                            {description}
                        </p>
                    </div>
                    {!compact && (
                        <ExternalLink className="h-5 w-5 text-white/40 transition-colors group-hover:text-white/80 shrink-0" />
                    )}
                </div>
            </motion.div>
        </Link>
    );
}
