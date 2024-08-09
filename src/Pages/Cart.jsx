import Layout from "../components/Layout";

function Cart() {
    return (
        <Layout>
            <main className="pb-16 lg:py-8 min-h-screen">
                <div className="container">

                    {/*  Breadcrumbs  */}
                    <ul className="breadcrumbs flex flex-wrap gap-y-1 gap-x-4">
                        <li><a href="{{ route('home') }}" className="text-gray hover:text-darkblue text-xs">Home</a></li>
                        <li><span className="text-gray text-xs">Shopping cart</span></li>
                    </ul>

                    <section className="mb-24">
                         {/* Section heading */}
                        <h1 className="mb-8 text-lg lg:text-[42px] font-black text-darkblue">Shopping cart</h1>
                        <div className="py-3 px-6 rounded-lg bg-darkblue text-white">Cart is empty</div>
                        {/* @else 
                          Adaptive table 
                         <div className="lg:overflow-auto">
                            <table className="mx-[-50px] lg:mx-0 min-w-full border-spacing-y-4 text-white text-sm text-left"
                                style="border-collapse: separate">

                                <thead className="hidden lg:table-header-group lg:text-xs uppercase text-darkblue">
                                    <th scope="col" className="py-3 px-6">Товар</th>
                                    <th scope="col" className="py-3 px-6">Цена</th>
                                    <th scope="col" className="py-3 px-6">Количество</th>
                                    <th scope="col" className="py-3 px-6">Сумма</th>
                                    <th scope="col" className="py-3 px-6"></th>
                                </thead>

                                <tbody>

                                     @foreach ($cartItems as $cartItem) 
                                    <tr className="mb-4 lg:mb-0 grid grid-cols-2 lg:table-row">
                                        <td scope="row" className="col-span-2 py-4 px-4 md:px-6 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg bg-gray">
                                            <div className="items-start flex lg:flex-row min-w-[200px] gap-2 lg:gap-6 lg:items-center">
                                                <div
                                                    className="shrink-0 overflow-hidden w-[150px] lg:w-[84px] h-[150px] lg:h-[84px] rounded-lg">
                                                    <img src="{{ $cartItem->product->makeThumbnail('original') }}"
                                                        className="object-cover w-full h-full"
                                                        alt="{{ $cartItem->product->title }}" />
                                                </div>
                                                <div className="py-3">
                                                    <h4 className="text-xs sm:text-sm xl:text-md font-bold">
                                                        <a href="{{ route('product', $cartItem->product) }}"
                                                            className="inline-block text-white hover:text-darkblue">
                                                             {{ $cartItem-> product -> title}} Title
                                                        </a>
                                                    </h4>

                                                     @if ($cartItem->optionValues->isNotEmpty()) 
                                                    <ul className="space-y-1 mt-2 text-xs">
                                                             @foreach ($cartItem->optionValues as $optionValue) 
                                                        <li className="text-body">
                                                            {{ $optionValue-> option -> title. ': ' . $optionValue->title }}  option title
                                                        </li>
                                                         @endforeach 
                                                    </ul>
                                                    @endif 
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 md:px-6 bg-gray">
                                            <div className="justify-center flex lg:block text-lg lg:text-sm mt-2 lg:mt-0 font-medium whitespace-nowrap">
                                                 {{ $cartItem-> product -> priceFormatted()}} Price
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 md:px-6 bg-gray">
                                            <div className="flex items-stretch h-[56px] gap-2">
                                                <form action="{{ route('cart.quantity', $cartItem) }}" method="POST" id="cart-form">
                                                    @csrf 
                                                    <button type="button" id="minus"
                                                        className="w-10 lg:w-12 h-10 lg:h-full rounded-lg border border-black/20 hover:bg-bgheader/80 active:bg-card/50  bg-bgheader text-black text-xs text-center font-bold shadow-transparent outline-0 transition">-</button>
                                                    <input name="quantity" type="number" id="quantity"
                                                        className="h-10 lg:h-full px-2 lg:px-4 rounded-lg border  border-black/20 bg-bgheader text-black text-xs text-center font-bold shadow-transparent outline-0 transition placeholder:text-black"
                                                        min="1" max="999" value="{{ $cartItem->quantity }}"
                                                        placeholder="К-во" />
                                                        <button type="button" id="plus"
                                                            className="w-10 lg:w-12 h-10 lg:h-full rounded-lg border border-black/20 hover:bg-bgheader/80 active:bg-card/50  bg-bgheader text-black text-xs text-center font-bold shadow-transparent outline-0 transition">+</button>
                                                </form>
                                            </div>
                                        </td>
                                        <td className="rounded-bl-lg lg:rounded-none py-4 px-4 md:px-6 bg-gray">
                                            <div className="text-xl ml-2 mt-[-14px] lg:mt-0 lg:ml-0 lg:text-sm font-medium whitespace-nowrap">
                                                 {{ $cartItem-> amount}} amount
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 md:px-6 rounded-br-lg lg:rounded-r-lg bg-gray">
                                            <form action="{{ route('cart.delete', $cartItem->id) }}" method="POST">
                                                 @csrf 
                                                 @method('DELETE') 
                                                <button type="submit" className="w-12 !h-12 !px-0 mt-[-14px] lg:mt-0 btn btn-blue ml-28 lg:ml-0"
                                                    title="Удалить из корзины">
                                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 52 52">
                                                        <path
                                                            d="M49.327 7.857H2.673a2.592 2.592 0 0 0 0 5.184h5.184v31.102a7.778 7.778 0 0 0 7.776 7.776h20.735a7.778 7.778 0 0 0 7.775-7.776V13.041h5.184a2.592 2.592 0 0 0 0-5.184Zm-25.919 28.51a2.592 2.592 0 0 1-5.184 0V23.409a2.592 2.592 0 1 1 5.184 0v12.96Zm10.368 0a2.592 2.592 0 0 1-5.184 0V23.409a2.592 2.592 0 1 1 5.184 0v12.96ZM20.817 5.265h10.367a2.592 2.592 0 0 0 0-5.184H20.817a2.592 2.592 0 1 0 0 5.184Z" />
                                                    </svg>
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                     @endforeach 

                                </tbody>
                            </table>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-8">
                            <div className="text-[32px] font-black text-darkblue">
                                Итого: {{ cart()-> total()}} 2200$
                            </div>
                            <div className="pb-3 lg:pb-0">
                                <form action="{{ route('cart.truncate') }}" method="POST">
                                     @csrf 
                                     @method('DELETE')
                                    <button type="submit" className="text-black hover:text-darkblue font-medium">
                                        Очистить корзину
                                    </button>
                                </form>
                            </div>
                            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                                <a href="{{ route('catalog') }}" className="btn btn-gray">За покупками</a>
                                <a href="{{ route('order') }}" className="btn btn-blue">Оформить заказ</a>
                            </div>
                        </div> */}

                        {/* @endif */}

                    </section>

                </div>
            </main>
        </Layout>
    );
}

export default Cart;