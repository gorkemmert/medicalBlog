import { NextSeo } from 'next-seo';

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{
      title,
      description,
    }}
  />
);

export default Seo;