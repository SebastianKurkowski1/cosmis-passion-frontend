import fetcher, {Method} from "@/services/fetcher.ts";

export default function HomePage() {
    fetcher(Method.GET, 'api/apod/', ).then(() => {
        console.log('asdasd');
    })

    return (
        <>
            <div className={"flex items-center flex-col"}>
                Homepage
            </div>
        </>
    );
}