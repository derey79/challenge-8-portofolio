import logoFooter from '@/assets/logo-footer.png';
import { menuItems } from '@/data/navigations';
import { socialMediaData } from '@/data/socialMedia';

const SHARED_BOX_STYLES =
  'border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950' as const;
const FLEX_ROW_CONTAINER =
  'flex flex-col justify-between gap-6 sm:flex-row sm:items-left' as const;
const SOCIAL_LINK_CLASS =
  'flex h-9 w-9 items-center justify-center rounded-full bg-transparent border border-neutral-200 dark:border-neutral-800 hover:bg-white transition-all group' as const;

const SOCIAL_ICON_CLASS =
  'h-4 w-4 object-contain invert-[0.4] group-hover:invert-0 transition-all' as const;

export default function Footer() {
  return (
    <footer className='w-full bg-base-white dark:bg-base-black transition-colors duration-300 p-8'>
      <div
        className={`mx-auto max-w-5xl rounded-3xl p-4 md:p-8 text-main-color ${SHARED_BOX_STYLES}`}
      >
        <div className='flex flex-col-reverse justify-between gap-6 md:flex-row md:items-start'>
          <h2 className='text-2xl font-bold tracking-wide uppercase md:text-4xl max-w-md leading-tight'>
            Let's Discuss <br /> Your Ideas
          </h2>

          {/* Bagian Logo dari Asset */}
          <div className='flex items-center gap-2 self-start md:self-auto'>
            <img
              src={logoFooter}
              alt='Logo Icon'
              className='h-6 w-auto object-contain'
            />
            <span className='text-2xl font-semibold tracking-tight'>
              Your Logo
            </span>
          </div>
        </div>

        <hr className={`my-8 ${SHARED_BOX_STYLES}`} />

        <div className={FLEX_ROW_CONTAINER}>
          <nav
            aria-label='Footer Navigation'
            className='flex flex-col md:flex-row flex-wrap items-left gap-2 sm:gap-4'
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='block rounded-full px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-neutral-300 dark:hover:bg-neutral-800 hover:text-white text-main-color'
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-3 self-start'>
            {socialMediaData.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                className={SOCIAL_LINK_CLASS}
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className={SOCIAL_ICON_CLASS}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
