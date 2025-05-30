import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { 
  HomeIcon,
  PencilSquareIcon,
  FolderOpenIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  CubeIcon
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Blog', href: '/categories', icon: PencilSquareIcon },
  { name: 'Resources', href: '/resources', icon: FolderOpenIcon },
  { name: 'Installation', href: '/installation', icon: WrenchScrewdriverIcon },
  { name: 'Jobs', href: '/jobs', icon: BriefcaseIcon },
  { name: 'About', href: '/about', icon: BuildingOfficeIcon },
  { name: 'Contact', href: '/contact', icon: PhoneIcon },
]

function Navbar() {
  const location = useLocation()

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  {/* Logo/Site Title */}
                  <Link to="/" className="flex items-center space-x-2">
                    <CubeIcon className="h-8 w-auto text-primary" aria-hidden="true" />
                    <span className="text-xl font-bold text-gray-900">DevopsBlog</span>
                  </Link>
                </div>
                <nav aria-label="Global" className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? 'border-primary text-gray-900'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        )
                      }
                    >
                      <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="flex items-center">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* New Post Button */}
                <button
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                   <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                  New Post
                </button>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )
                  }
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                   <item.icon className="h-5 w-5 mr-2 inline-block" aria-hidden="true" />
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {/* <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar 