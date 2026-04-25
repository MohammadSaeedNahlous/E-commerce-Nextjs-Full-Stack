import ProductsList from '@/components/shared/product/products-list';
import sampleData from '@/db/sample-data';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <ProductsList
        data={sampleData.products}
        title='Newest Arrivals'
        limit={4}
      />
    </div>
  );
};

export default HomePage;
