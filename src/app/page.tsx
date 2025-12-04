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
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-white/80">위즈더플래닝 내부 허브</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
            위플 링크스
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            모든 대시보드, 자동화 도구 및 리소스에 대한 중앙 집중식 액세스
          </p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8"
        >
          {/* Section 1: Data & Dashboards */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              데이터 및 대시보드
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LinkCard
                title="위즈더플래닝 매출 데이터"
                description="실시간 매출 및 성과 지표 확인"
                href="https://wipledata.vercel.app/"
                icon={<BarChart3 className="w-6 h-6" />}
                gradient="from-blue-500/20 to-cyan-500/20"
              />
              <LinkCard
                title="사장님 댓글 자동화 대시보드"
                description="자동 응답 로그 및 상태 모니터링"
                href="https://auto-review-dashboard.vercel.app/logs"
                icon={<Bot className="w-6 h-6" />}
                gradient="from-indigo-500/20 to-purple-500/20"
              />
              <LinkCard
                title="포커스 미디어 설치현황 맵"
                description="설치 현황 및 위치 매핑"
                href="https://focusmedia.vercel.app/"
                icon={<Map className="w-6 h-6" />}
                gradient="from-emerald-500/20 to-teal-500/20"
              />
              <LinkCard
                title="위플 인바운드 DB"
                description="온라인 문의 및 데이터 관리"
                href="https://wipledata.vercel.app/data-management/online-check"
                icon={<Database className="w-6 h-6" />}
                gradient="from-cyan-500/20 to-blue-500/20"
              />
            </div>
          </motion.section>

          {/* Section 2: Automation & Tools */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-400" />
              자동화 및 도구
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LinkCard
                title="포커스미디어 견적서 자동발송"
                description="견적서 자동 생성 및 발송 시스템"
                href="https://focus-rust-six.vercel.app/"
                icon={<Send className="w-6 h-6" />}
                gradient="from-orange-500/20 to-red-500/20"
              />
              <LinkCard
                title="블로그 자동화"
                description="블로그 포스팅 자동 생성 및 관리"
                href="https://nonpaid-rubi-arythmically.ngrok-free.dev"
                icon={<LayoutGrid className="w-6 h-6" />}
                gradient="from-pink-500/20 to-rose-500/20"
              />
            </div>
          </motion.section>

          {/* Section 4: Portfolios */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-yellow-400" />
              포트폴리오
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LinkCard
                title="위즈더플래닝 마케팅 포트폴리오"
                description="마케팅 성과 및 사례 모음"
                href="https://obsidian-quit-df6.notion.site/20938318fea6802e83b3c1d2add64777?pvs=74"
                icon={<Megaphone className="w-6 h-6" />}
                gradient="from-yellow-500/20 to-amber-500/20"
              />
              <LinkCard
                title="위즈더플래닝 콘텐츠 제작 포트폴리오"
                description="콘텐츠 제작 작업물 및 레퍼런스"
                href="https://obsidian-quit-df6.notion.site/26738318fea680c5978ff75286208b63?pvs=74"
                icon={<Clapperboard className="w-6 h-6" />}
                gradient="from-pink-500/20 to-rose-500/20"
              />
            </div>
          </motion.section>

          {/* Section 3: Resources */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <Database className="w-5 h-5 text-green-400" />
              리소스
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LinkCard
                title="드림에이지 인바운드 DB"
                description="드림에이지 인바운드 고객 데이터베이스"
                href="https://docs.google.com/spreadsheets/d/17HN-5-rAhOcMtV-f_2TST2md3sbcarhP2nItJk1XXrY/edit?gid=59310311#gid=59310311"
                icon={<FileSpreadsheet className="w-6 h-6" />}
                gradient="from-green-500/20 to-emerald-500/20"
              />
              <LinkCard
                title="위플 구글 드라이브"
                description="회사 공유 드라이브 및 문서"
                href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-globalnav-goto"
                icon={<HardDrive className="w-6 h-6" />}
                gradient="from-yellow-500/20 to-orange-500/20"
              />
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
