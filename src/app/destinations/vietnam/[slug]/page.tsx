import DestinationArticleTemplate, {
    generateDestinationArticleMetadata,
    generateDestinationArticleStaticParams,
} from '@/components/DestinationArticleTemplate';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    return generateDestinationArticleMetadata('vietnam', params);
}

export async function generateStaticParams() {
    return generateDestinationArticleStaticParams('vietnam');
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    return <DestinationArticleTemplate country="vietnam" params={params} />;
}
