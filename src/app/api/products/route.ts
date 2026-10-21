import { getProducts } from '@/lib/catalog';

export async function GET(req: NextRequest) {
  const products = await getProducts();
  return NextResponse.json(products);
}
