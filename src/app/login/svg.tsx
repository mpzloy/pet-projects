export default function Svg() {
  return (
    <svg id="page-login-image" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 8000 5000">
      <defs>
        <clipPath id="clippath">
          <polygon clipRule="evenodd"
                   fill="none" points=".67 1332.48 .67 5000 1554.63 5000 2487.08 2144.38 .67 1332.48"/>
        </clipPath>
        <linearGradient id="linear-gradient" x1="2652.79" y1="1727.82" x2="-495.55" y2="4942.09"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--login-gradient-start)"/>
          <stop offset="1" stopColor="var(--login-gradient-end)"/>
        </linearGradient>
        <clipPath id="clippath-1">
          <polygon clipRule="evenodd"
                   fill="none" points=".67 1062.51 3696.34 2269.27 4437.17 .47 .67 .47 .67 1062.51"/>
        </clipPath>
        <linearGradient id="linear-gradient1" x1="3703.2" y1="2260.31" x2="535.5" y2="-141.57"
                        xlinkHref="#linear-gradient"/>
        <clipPath id="clippath-2">
          <polygon clipRule="evenodd"
                   fill="none" points="1878.42 5000 6899.36 5000 2362.19 3518.47 1878.42 5000"/>
        </clipPath>
        <linearGradient id="linear-gradient2" x1="4439.66" y1="3586.98" x2="4199.91" y2="6761.6"
                        xlinkHref="#linear-gradient"/>
        <clipPath id="clippath-3">
          <polygon clipRule="evenodd"
                   fill="none" points="4065.96 2258.75 7999.91 3543.31 7999.91 .47 4803.36 .47 4065.96 2258.75"/>
        </clipPath>
        <linearGradient id="linear-gradient3" x1="4560.18" y1="2476.09" x2="8511.17" y2="586.93"
                        xlinkHref="#linear-gradient"/>
        <clipPath id="clippath-4">
          <polygon clipRule="evenodd"
                   fill="none"
                   points="7999.91 3543.31 4918.86 2537.25 4507.52 3796.96 7999.91 4937.34 7999.91 3543.31"/>
        </clipPath>
        <linearGradient id="linear-gradient4" x1="4899.88" y1="3743.75" x2="8423.93" y2="3726.94"
                        xlinkHref="#linear-gradient"/>
      </defs>
      <rect x=".67" y=".47" width="7999.24" height="4999.53" fill="var(--login-gradient-start)"/>
      <g clipPath="url(#clippath)">
        <rect fill="url(#linear-gradient)" x=".67" y="1332.48" width="2486.41" height="3667.52"/>
      </g>
      <g clipPath="url(#clippath-1)">
        <rect fill="url(#linear-gradient1)" x=".67" y=".47" width="4436.51" height="2268.8"/>
      </g>
      <g clipPath="url(#clippath-2)">
        <rect fill="url(#linear-gradient2)" x="1878.42" y="3518.47" width="5020.94" height="1481.53"/>
      </g>
      <g clipPath="url(#clippath-3)">
        <rect fill="url(#linear-gradient3)" x="4065.96" y=".47" width="3933.96" height="3542.84"/>
      </g>
      <g clipPath="url(#clippath-4)">
        <rect fill="url(#linear-gradient4)" x="4507.52" y="2537.25" width="3492.39" height="2400.09"/>
      </g>
    </svg>
  );
}
