'use client';

import LogoutButton from '@/components/auth/LogoutButton';
import { cn } from '@/components/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiStudent, PiChalkboardTeacher } from "react-icons/pi";

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) =>
    pathname === path
      ? "bg-[#6479D3] text-white"
      : "hover:bg-gray-200"
      
  return (
    <div className="flex h-screen">
      <aside className="hidden sm:flex fixed top-0 left-0 h-screen w-[240px] flex-col justify-between bg-[#F1F2F7] text-[#5A6ACF] font-poppins text-[11px] z-50">
        <ul className="sidebaralign">
          <Link href="/">
            <Image
              src="/iconeTarrafa.svg"
              alt="Tarrafa logomark"
              width={200}
              height={60}
            />
          </Link>

          <li className="mb-4 ml-1 text-[#08243180]">MENU</li>
          <li className={cn(`rounded-md active:scale-95 transition-transform duration-100 ${isActive("/")}`)}>
            <Link href="/">
              <div className="sidebarpainel flex items-center mb-2 py-2">
                <div className="w-5 h-5 ml-4">
                  <PiStudent size={20} />
                </div>
                <p className="ml-3">Estudantes</p>
              </div>
            </Link>
          </li>

          <li className={cn(`rounded-md active:scale-95 transition-transform duration-100 ${isActive("/tutores")}`)}>
            <Link href="/tutores">
              <div className="sidebarpainel flex items-center py-2">
                <div className="w-5 h-5 ml-4">
                  <PiChalkboardTeacher size={20} />
                </div>
                <p className="ml-3">Tutores</p>
              </div>
            </Link>
          </li>

        </ul>
        <div className="flex justify-end p-2">
          <LogoutButton />
        </div>
      </aside>
    </div>
  );
}
