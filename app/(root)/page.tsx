import ProductsList from '@/components/shared/product/products-list';
import { getLatestProducts } from '@/lib/actions/product.actions';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
// import sampleData from '@/db/sample-data';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <h1>Home</h1>
      <ProductsList
        data={latestProducts}
        title='Newest Arrivals'
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </div>
  );
};

export default HomePage;
