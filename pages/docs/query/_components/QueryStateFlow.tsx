/* eslint-disable react/no-unescaped-entities */
export default function QueryStateFlow() {
  return (
    <section className="-mr-6 overflow-x-auto pb-4 pt-8">
      <div className="relative w-[41rem] text-sm">
        <svg
          viewBox="0 0 440 500"
          stroke="rgba(120 120 120)"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute top-[10.6rem]"
          width={486}
        >
          <path d="M15.593 3.607v34.088" />
          <path d="M23.751 171.619a8.16 8.16 0 0 1-8.158-8.158v-49.344m30.009 57.502H23.751M7.79 29.892l7.803 7.803 7.803-7.803M37.8 179.423l7.803-7.803-7.803-7.803" />
          <path d="M23.751 398.927a8.16 8.16 0 0 1-8.158-8.158V163.816m30.009 235.111H23.751" />
          <path d="M37.799 406.731l7.803-7.803-7.803-7.803m377.243-211.702l7.803-7.803-7.803-7.803m7.802 7.802h-34.079m-162.389 7.804l7.803-7.803-7.803-7.803m7.802 7.802h-34.079m26.275 235.112l7.803-7.803-7.803-7.803m7.803 7.802h-34.079M269.95 247.01a8.16 8.16 0 0 0 8.158-8.158v-14.344m-77.009 22.502h68.851m-61.048 7.804l-7.803-7.803 7.803-7.803M269.95 475.01a8.16 8.16 0 0 0 8.158-8.158v-14.344m-77.009 22.502h68.851" />
          <path d="M208.902 482.814l-7.803-7.803 7.803-7.803m61.048-183.896a8.16 8.16 0 0 1 8.158 8.158v85.344m-77.009-93.502h68.851m-61.047-7.804l-7.803 7.803 7.803 7.803" />
        </svg>

        <div className="card">
          <b>Initial State</b>
          <ul>
            <li>status: "loading"</li>
            <li>
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
              <li>
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
          <div className="card -mb-14">
            <b>After refetch failed</b>
            <ul>
              <li>status: "success"</li>
              <li>isLoading: false</li>
              <li>
                isSuccess: <span className="text-green-500">true</span>
              </li>
              <li>isError: false</li>
              <li className="mt-2 border-t border-dashed pt-1.5">isWaiting: false</li>
              <li className="mt-2 border-t border-dashed pt-1.5">
                isRefetchError: <span className="text-green-500">true</span>
              </li>
              <li className="mt-2 border-t border-dashed pt-1.5">
                isGoingToRetry: <span className="text-blue-600">bool</span>
                <div className="pt-1 text-xs italic">(depends on option 👆)</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-12 pl-14 pt-12">
          <div className="card">
            <b>After failed</b>
            <ul>
              <li>status: "error"</li>
              <li>isLoading: false</li>
              <li>isSuccess: false</li>
              <li>
                isError: <span className="text-green-500">true</span>
              </li>
              <li className="mt-2 border-t border-dashed pt-1.5">isWaiting: false</li>
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
      </div>

      <style jsx>
        {`
          .card {
            width: 10rem/* 160px */;
            border-radius: 0.25rem/* 4px */;
            border-width: 1px;
            overflow: hidden;
          }
          .card :global(b) {
            display: block;
            padding: 0.5rem/* 8px */;
            border-bottom: 1px solid #e5e7eb;;
          }
          .card :global(ul) {
            padding: 0.5rem/* 8px */;
          }
          .card.waiting-state {
            border-color: rgb(37 99 235);
            background-color: rgb(37 99 235 / 0.03);
          }
          .card.waiting-state :global(b) {
            border-color: rgb(37 99 235);
          }
        `}
      </style>
      <style jsx global>
        {`
          .dark .card.waiting-state {
            background-color: rgb(37 99 235 / 0.1);
          }
        `}
      </style>
    </section>
  );
}
