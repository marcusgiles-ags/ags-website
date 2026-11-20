import DestinationArticleTemplate, {
    generateDestinationArticleMetadata,
    generateDestinationArticleStaticParams,
} from '@/components/DestinationArticleTemplate';

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    return generateDestinationArticleMetadata('cambodia', params);
}

export async function generateStaticParams() {
    return generateDestinationArticleStaticParams('cambodia');
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    return <DestinationArticleTemplate country="cambodia" params={params} />;
}
