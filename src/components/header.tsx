import CartWidget from '@/components/cart-widget'
import Image from 'next/image'
import Link from 'next/link'
import SearchForm from './search-form'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>

          <Image
            className="w-6 h-6 rounded-full"
            src="https://github.com/pedrohlucena.png"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}
