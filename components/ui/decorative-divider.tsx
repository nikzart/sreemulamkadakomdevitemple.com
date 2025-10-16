interface DecorativeDividerProps {
  bgColor: string
  dividerColor: string
  invert?: boolean
}

export function DecorativeDivider({ bgColor, dividerColor, invert = false }: DecorativeDividerProps) {
  return (
    <div className={`relative h-8 overflow-hidden ${bgColor}`}>
      <div className="absolute top-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
          className={`w-full h-8 ${dividerColor} opacity-100`}
        >
          <path
            d={invert ? "M0,30 Q300,0 600,30 T1200,30 V0 H0 Z" : "M0,0 Q300,60 600,0 T1200,0 V30 H0 Z"}
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}
