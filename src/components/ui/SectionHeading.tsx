import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeading({ children, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 flex flex-col w-full ${align === 'center' ? 'items-center' : 'items-start'}`}
    >
      <h2 className="font-syne text-4xl lg:text-[40px] font-bold text-white tracking-wide z-10">
        {children}
      </h2>
      <div className={`relative w-full mt-6 ${align === 'center' ? 'max-w-md mx-auto' : ''}`}>
        <div className={`absolute inset-y-0 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} w-1/3 bg-[#00e5ff] blur-md opacity-20`} />
        <div className={`h-[1px] w-full ${align === 'center' ? 'bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent' : 'bg-gradient-to-r from-[#00e5ff] via-[#00e5ff]/50 to-transparent'} relative z-10`} />
      </div>
    </motion.div>
  );
}
