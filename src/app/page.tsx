"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  HardDrive,
  Bot,
  Map,
  Send,
  FileSpreadsheet,
  LayoutGrid,
  Sparkles,
  Briefcase,
  Megaphone,
  Clapperboard
} from "lucide-react";
import { LinkCard } from "@/components/LinkCard";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center bg-[#030712]">
      <div className="w-full max-w-7xl space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between px-2"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">위플 링크스</h1>
              <p className="text-sm text-white/50">위즈더플래닝 내부 허브</p>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-sm text-white/40">{new Date().toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 h-full"
        >
          {/* Main Dashboard - Large Card */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2">
            <LinkCard
              title="위즈더플래닝 매출 데이터"
              description="실시간 매출 및 성과 지표 확인"
              href="https://wipledata.vercel.app/"
              icon={<BarChart3 className="w-8 h-8" />}
              gradient="from-blue-600/30 to-cyan-600/30"
              className="h-full"
            />
          </motion.div>

          {/* Key Tools */}
          <motion.div variants={item} className="md:col-span-1">
            <LinkCard
              title="댓글 자동화"
              description="자동 응답 로그"
              href="https://auto-review-dashboard.vercel.app/logs"
              icon={<Bot className="w-5 h-5" />}
              gradient="from-indigo-500/20 to-purple-500/20"
              compact
            />
          </motion.div>
          <motion.div variants={item} className="md:col-span-1">
            <LinkCard
              title="견적서 발송"
              description="자동 생성 및 발송"
              href="https://focus-rust-six.vercel.app/"
              icon={<Send className="w-5 h-5" />}
              gradient="from-orange-500/20 to-red-500/20"
              compact
            />
          </motion.div>
          <motion.div variants={item} className="md:col-span-1">
            <LinkCard
              title="블로그 자동화"
              description="포스팅 관리"
              href="https://nonpaid-rubi-arythmically.ngrok-free.dev"
              icon={<LayoutGrid className="w-5 h-5" />}
              gradient="from-pink-500/20 to-rose-500/20"
              compact
            />
          </motion.div>

          {/* Maps & DB */}
          <motion.div variants={item} className="md:col-span-2">
            <LinkCard
              title="포커스 미디어 맵"
              description="설치 현황 및 위치 매핑"
              href="https://focusmedia.vercel.app/"
              icon={<Map className="w-6 h-6" />}
              gradient="from-emerald-500/20 to-teal-500/20"
              compact
            />
          </motion.div>
          <motion.div variants={item} className="md:col-span-1">
            <LinkCard
              title="인바운드 DB"
              description="문의 관리"
              href="https://wipledata.vercel.app/data-management/online-check"
              icon={<Database className="w-5 h-5" />}
              gradient="from-cyan-500/20 to-blue-500/20"
              compact
            />
          </motion.div>

          {/* Portfolios - Wide */}
          <motion.div variants={item} className="md:col-span-2">
            <LinkCard
              title="마케팅 포트폴리오"
              description="성과 및 사례 모음"
              href="https://obsidian-quit-df6.notion.site/20938318fea6802e83b3c1d2add64777?pvs=74"
              icon={<Megaphone className="w-6 h-6" />}
              gradient="from-yellow-500/20 to-amber-500/20"
              compact
            />
          </motion.div>
          <motion.div variants={item} className="md:col-span-2">
            <LinkCard
              title="콘텐츠 제작 포트폴리오"
              description="작업물 및 레퍼런스"
              href="https://obsidian-quit-df6.notion.site/26738318fea680c5978ff75286208b63?pvs=74"
              icon={<Clapperboard className="w-6 h-6" />}
              gradient="from-pink-500/20 to-rose-500/20"
              compact
            />
          </motion.div>

          {/* Resources */}
          <motion.div variants={item} className="md:col-span-1">
            <LinkCard
              title="드림에이지 DB"
              description="고객 데이터"
              href="https://docs.google.com/spreadsheets/d/17HN-5-rAhOcMtV-f_2TST2md3sbcarhP2nItJk1XXrY/edit?gid=59310311#gid=59310311"
              icon={<FileSpreadsheet className="w-5 h-5" />}
              gradient="from-green-500/20 to-emerald-500/20"
              compact
            />
          </motion.div>
          <motion.div variants={item} className="md:col-span-2">
            <LinkCard
              title="구글 드라이브"
              description="회사 공유 드라이브"
              href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-globalnav-goto"
              icon={<HardDrive className="w-6 h-6" />}
              gradient="from-yellow-500/20 to-orange-500/20"
              compact
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
