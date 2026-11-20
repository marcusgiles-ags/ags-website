import DestinationArticleTemplate, {
    generateDestinationArticleMetadata,
    generateDestinationArticleStaticParams,
} from '@/components/DestinationArticleTemplate';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    return generateDestinationArticleMetadata('thailand', params);
}

export async function generateStaticParams() {
    return generateDestinationArticleStaticParams('thailand');
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    return <DestinationArticleTemplate country="thailand" params={params} />;
}
