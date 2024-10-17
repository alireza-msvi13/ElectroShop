import Btn from '@/components/modules/Btn/Btn';
import { IProduct } from '@/interfaces/product';
import Link from 'next/link';
import React from 'react';

interface RecentProductProps {
    products: IProduct[];
}

export default function RecentProduct({ products }: RecentProductProps) {
    return (
        <div className='col-span-12 xl:col-span-7 bg-mainWhite border rounded-lg shadow'>
            <div className="flex justify-between items-center px-4 py-2 mb-2 border-b-2 ">
                <h3 className='tracking-wider font-morabba'>محصولات اخیر</h3>
                <Btn href='admin-panel/products' style=' text-xs w-[100px] h-[30px]' text='دیدن همه' />
            </div>
            <div className='px-4 overflow-auto'>
                <table className="table-fixed min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className='child:pr-4'>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider">محصول</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider">برند</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider">موجودی</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider">وضعیت</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider">مشاهده</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-xs">
                        {products.map((product) => (
                            <tr className='child:pr-4' key={product._id}>
                                <td className="py-4 whitespace-nowrap text-xs">{product.name}</td>
                                <td className="py-4 whitespace-nowrap text-xs">{product.brand}</td>
                                <td className="py-4 whitespace-nowrap text-xs">
                                    {product.stock > 10 ? product.stock : "0" + product.stock}
                                </td>
                                <td className="py-4 whitespace-nowrap text-xs">
                                    <span className='px-2 py-1 rounded text-xs text-white bg-main'>
                                        موجود
                                    </span>
                                </td>
                                <td className="py-4 whitespace-nowrap text-xs text-main">
                                    <Link href={'admin-panel/products-list'}>دیدن</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
