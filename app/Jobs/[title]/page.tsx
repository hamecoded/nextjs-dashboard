export default function Page({ params }: { params: { title: string } }) {
    return <div>{params.title} Jobs</div>
}