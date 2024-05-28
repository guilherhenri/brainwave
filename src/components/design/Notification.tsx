import { notification1 } from '@/assets'
import { notificationImages } from '@/constants'

interface NotificationProps {
  className?: string
  title: string
}

export function Notification({ className, title }: NotificationProps) {
  return (
    <div
      className={`flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-5 pr-6
      backdrop-blur ${className || ''}`}
    >
      <img
        src={notification1}
        alt="notification image"
        width={62}
        height={62}
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 text-base font-semibold">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.map((image, index) => (
              <li
                key={index}
                className="flex size-6 overflow-hidden rounded-full border-2 border-n-12"
              >
                <img
                  src={image}
                  alt={image}
                  className="w-full"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>

          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  )
}
