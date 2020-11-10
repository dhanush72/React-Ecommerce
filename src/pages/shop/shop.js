import React from "react";
import data from "./shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

const Shop = () => {
  const collections = data;
  return (
    <div className="shop-page">
      {collections.map((collection) => {
        return <CollectionPreview key={collection.id} {...collection} />;
      })}
    </div>
  );
};

export default Shop;
