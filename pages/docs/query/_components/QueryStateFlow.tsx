/* eslint-disable react/no-unescaped-entities */
export default function QueryStateFlow() {
  return (
    <section className="-ml-6 -mr-6 overflow-x-auto pb-4 pl-6 pt-8">
      <div className="relative w-[41rem] text-sm">
        <svg
          viewBox="0 0 440 550"
          stroke="rgba(120 120 120)"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute top-[10.6rem] -z-10"
          width={486}
        >
          <path d="M15.593 3.607v34.088" />
          <path d="M23.751 171.619a8.16 8.16 0 0 1-8.158-8.158v-49.344m30.009 57.502H23.751M7.79 29.892l7.803 7.803 7.803-7.803M37.8 179.423l7.803-7.803-7.803-7.803" />
          <path d="M23.751 366.927a8.16 8.16 0 0 1-8.158-8.158V163.816m30.009 203.111H23.751" />
          <path d="M37.799 374.731l7.802-7.803-7.802-7.804" transform-origin="41.7px 376.928px" />
          <path d="M415.042 179.423l7.803-7.803-7.803-7.803m7.802 7.802h-34.079m-162.389 7.804l7.803-7.803-7.803-7.803m7.802 7.802h-34.079" />
          <path
            d="M226.375 374.731l7.802-7.803-7.802-7.803"
            transform-origin="230.276px 376.928px"
          />
          <path d="M234.177 366.927h-34.079M269.95 247.01a8.16 8.16 0 0 0 8.158-8.158v-14.344m-77.009 22.502h68.851m-61.048 7.804l-7.803-7.803 7.803-7.803M269.95 526.01a8.16 8.16 0 0 0 8.158-8.158v-99.344M201.099 526.01h68.851" />
          <path
            d="M208.902 533.814l-7.802-7.803 7.802-7.804"
            transform-origin="205.001px 516.01px"
          />
          <path d="M269.95 283.312a8.16 8.16 0 0 1 8.158 8.158v52.344m-77.009-60.502h68.851m-61.047-7.804l-7.803 7.803 7.803 7.803" />
          <path d="M78.72 469.473v32.088" />
          <path d="M70.917 493.758l7.803 7.803 7.803-7.803" />
        </svg>

        <div className="card">
          <b>Initial State</b>
          <ul>
            <li>status: "loading"</li>
            <li className="highlight-state">
              isLoading: <span className="text-green-500">true</span>
            </li>
            <li>isSuccess: false</li>
            <li>isError: false</li>
            <li className="mt-2 border-t border-dashed pt-1.5">isWaiting: false</li>
          </ul>
        </div>

        <div className="card waiting-state mt-12">
          <b>Fetch data...</b>
          <ul>
            <li>
              isWaiting: <span className="text-green-500">true</span>
            </li>
          </ul>
        </div>

        <div className="flex items-start gap-12 pl-14 pt-12">
          <div className="card">
            <b>After succeed</b>
            <ul>
              <li>status: "success"</li>
              <li>isLoading: false</li>
              <li className="highlight-state">
                isSuccess: <span className="text-green-500">true</span>
              </li>
              <li>isError: false</li>
              <li className="mt-2 border-t border-dashed pt-1.5">isWaiting: false</li>
            </ul>
          </div>
          <div className="card waiting-state">
            <b>Refetch...</b>
            <ul>
              <li>
                isWaiting: <span className="text-green-500">true</span>
              </li>
            </ul>
          </div>
          <div className="card">
            <b>
              After refetch failed
              <div className="block text-xs font-normal">And no more retry</div>
            </b>
            <ul>
              <li>status: "success"</li>
              <li>isLoading: false</li>
              <li className="highlight-state">
                isSuccess: <span className="text-green-500">true</span>
              </li>
              <li>isError: false</li>
              <li className="mt-2 border-t border-dashed pt-1.5">isWaiting: false</li>
              <li className="mt-2 border-t border-dashed pt-1.5">
                isRefetchError: <span className="text-green-500">true</span>
              </li>
              <li>isGoingToRetry: false</li>
            </ul>
          </div>
        </div>

        <div className="-mt-6 flex items-start gap-12 pl-14">
          <div className="card waiting-state">
            <b>After failed</b>
            <ul>
              <li>isWaiting: false</li>
              <li className="mt-2 border-t border-dashed pt-1.5">
                isGoingToRetry: <span className="text-blue-600">bool</span>
                <div className="pt-1 text-xs italic">(depends on option 👆)</div>
              </li>
            </ul>
          </div>
          <div className="card waiting-state">
            <b>Retry...</b>
            <ul>
              <li>
                isWaiting: <span className="text-green-500">true</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card ml-14 mt-12">
          <b>
            After failed
            <div className="block text-xs font-normal">And no more retry</div>
          </b>
          <ul>
            <li>status: "error"</li>
            <li>isLoading: false</li>
            <li>isSuccess: false</li>
            <li className="highlight-state">
              isError: <span className="text-green-500">true</span>
            </li>
            <li className="mt-2 border-t border-dashed pt-1.5">isWaiting: false</li>
            <li className="mt-2 border-t border-dashed pt-1.5">isGoingToRetry: false</li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          :global(.dark) {
            .card {
              border-color: rgb(234 179 8); /* yellow-500 */
              &.waiting-state {
                background-color: rgb(37 99 235 / 0.1);
              }
              &:not(.waiting-state) {
                b {
                  border-color: rgb(234 179 8); /* yellow-500 */
                  background: rgb(234 179 8 / 0.07); /* yellow-500 */
                }
                .border-dashed {
                  border-color: rgb(234 179 8); /* yellow-500 */
                }
              }
            }
          }
          .card {
            width: 10rem; /* 160px */
            border-radius: 4px;
            border: 1px solid rgb(148 163 184); /* slate-400 */
            .border-dashed {
              border-color: rgb(148 163 184); /* slate-400 */
            }
          }
          .card :global(b) {
            display: block;
            padding: 0.5rem; /* 8px */
            border-bottom: 1px solid rgb(148 163 184); /* slate-400 */
            border-radius: 3px 3px 0 0;
            background: rgb(234 179 8 / 0.15); /* yellow-500 */
          }
          .card :global(ul) {
            padding: 0.5rem; /* 8px */
          }
          .card.waiting-state {
            border-color: rgb(37 99 235);
            background-color: rgb(37 99 235 / 0.04);
            .border-dashed {
              border-color: rgb(37 99 235);
            }
          }
          .card.waiting-state :global(b) {
            border-color: rgb(37 99 235);
            background-color: transparent;
          }
          .highlight-state {
            position: relative;
            &::before {
              position: absolute;
              display: block;
              content: '';
              border: 0.5rem solid transparent;
              border-left-color: rgb(34 197 94);
              left: -19px;
              top: 3px;
            }
          }
        `}
      </style>
    </section>
  );
}
