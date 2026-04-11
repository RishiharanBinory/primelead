'use client'
import React, { useEffect, useRef, Component } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'
import {
  Star,
  Facebook,
  Users,
  BookOpen,
  Landmark,
  Layers,
  BoxIcon,
} from 'lucide-react'
// --- Utility Components ---
const AnimatedNumber = ({
  value,
  duration = 2,
}: {
  value: number
  duration?: number
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, {
    once: true,
    margin: '-50px',
  })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  )
  useEffect(() => {
    if (inView) {
      animate(count, value, {
        duration,
        ease: 'easeOut',
      })
    }
  }, [inView, value, count, duration])
  return <motion.span ref={ref}>{rounded}</motion.span>
}
// --- Sub-Components ---
const StatCard = ({
  value,
  label,
  suffix,
  icon: Icon,
  delay = 0,
}: {
  value: number
  label: string
  suffix?: string
  icon: typeof BoxIcon
  delay?: number
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-30px',
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
      className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-soft hover:shadow-soft-hover border border-primel-border transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-primel-lightbg flex items-center justify-center text-primel-blue mb-3 md:mb-6">
        <Icon className="w-4 h-4 md:w-6 md:h-6" />
      </div>

      <div className="flex items-baseline gap-0.5 md:gap-1 mb-1 md:mb-2">
        <span className="text-2xl md:text-5xl font-bold text-primel-navy tracking-tight">
          <AnimatedNumber value={value} />
        </span>
        {suffix && (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: delay + 1.5,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
            className="text-xl md:text-4xl font-bold text-primel-gold"
          >
            {suffix}
          </motion.span>
        )}
      </div>
      <p className="text-primel-gray font-medium text-xs md:text-base leading-tight">
        {label}
      </p>
    </motion.div>
  )
}
const BarChart = () => {
  const data = [
    {
      label: 'Registered',
      value: 2500,
      displayHeight: 100,
      highlight: true,
    },
    {
      label: 'Enrolled',
      value: 2000,
      displayHeight: 80,
      highlight: false,
    },
    {
      label: 'Courses',
      value: 500,
      displayHeight: 45,
      highlight: false,
    },
    {
      label: 'Universities',
      value: 15,
      displayHeight: 25,
      highlight: false,
    },
  ]
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-soft border border-primel-border flex flex-col h-full min-h-65 md:min-h-90"
    >
      <div className="mb-4 md:mb-8">
        <h3 className="font-bold text-base md:text-xl text-primel-navy mb-0.5 md:mb-1">
          Our Impact at a Glance
        </h3>
        <p className="text-xs md:text-sm text-primel-gray">
          Key metrics driving our global education network
        </p>
      </div>

      <div className="flex-1 flex items-end justify-between gap-2 md:gap-6 relative pt-4 md:pt-6">
        {/* Subtle background grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 pb-6 md:pb-8 pt-4 md:pt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-px bg-primel-border/60" />
          ))}
        </div>

        {/* Bars */}
        {data.map((item, index) => (
          <div
            key={item.label}
            className="flex flex-col items-center flex-1 group z-10"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.7 + index * 0.1,
                duration: 0.4,
              }}
              className="mb-1 md:mb-2 font-bold text-[10px] md:text-sm text-primel-navy"
            >
              {item.value.toLocaleString()}
            </motion.div>

            <div className="w-full max-w-9 md:max-w-12 h-25 md:h-50 flex items-end justify-center">
              <motion.div
                initial={{
                  height: '0%',
                }}
                whileInView={{
                  height: `${item.displayHeight}%`,
                }}
                viewport={{
                  once: true,
                  margin: '-30px',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 20,
                  delay: 0.4 + index * 0.1,
                }}
                className={`w-full rounded-t-md md:rounded-t-lg transition-colors duration-300 ${item.highlight ? 'bg-primel-blue' : 'bg-primel-gold/90 group-hover:bg-primel-gold'}`}
              />
            </div>

            <span className="mt-2 md:mt-4 text-[9px] md:text-xs font-medium text-primel-gray text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
const TrustBadge = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-soft border border-primel-border flex flex-row items-center gap-4 md:gap-8 relative overflow-hidden"
    >
      {/* Subtle left accent border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-primel-gold" />

      <div className="font-bold text-3xl md:text-6xl text-primel-navy tracking-tight pl-2">
        5.0
      </div>
      <div className="flex flex-col gap-1 md:gap-1.5">
        <div className="flex gap-0.5 md:gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.7 + i * 0.08,
              }}
            >
              <Star className="w-4 h-4 md:w-6 md:h-6 fill-primel-gold text-primel-gold" />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-base font-medium text-primel-gray">
          <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#1877F2]" />
          <span>58 Facebook Reviews</span>
        </div>
      </div>
    </motion.div>
  )
}
// --- Main Section Component ---
export const StatsSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-350 mx-auto">
        {/* Header Area — compact on mobile */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 mb-4 md:mb-6"
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primel-gold" />
            <span className="text-xs md:text-base font-bold uppercase tracking-[0.15em] text-primel-gray">
              What Primeleed Has Offered
            </span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primel-gold" />
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="text-3xl md:text-5xl lg:text-[4.5rem] font-bold text-primel-navy leading-[1.1] tracking-tight mb-3 md:mb-6"
          >
            Numbers That Speak.
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="text-sm md:text-xl text-primel-gray leading-relaxed text-balance mx-auto max-w-lg md:max-w-none"
          >
            Empowering the next generation of leaders through world-class
            education and global university partnerships.
          </motion.p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-8">
          {/* Stats Grid — always 2 columns, even on mobile */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 md:gap-8">
            <StatCard
              icon={Users}
              value={2500}
              label="Students Registered"
              suffix="+"
              delay={0.1}
            />
            <StatCard
              icon={BookOpen}
              value={2000}
              label="Students Enrolled"
              suffix="+"
              delay={0.15}
            />
            <StatCard
              icon={Landmark}
              value={15}
              label="Partner Universities"
              suffix="+"
              delay={0.2}
            />
            <StatCard
              icon={Layers}
              value={500}
              label="Courses Available"
              suffix="+"
              delay={0.25}
            />
          </div>

          {/* Right Column: Bar Chart & Trust Badge */}
          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-8">
            <div className="flex-1">
              <BarChart />
            </div>
            <TrustBadge />
          </div>
        </div>
      </div>
    </section>
  )
}
