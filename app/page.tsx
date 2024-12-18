import executeQuery from "./lib/db"

interface IUsers {
    age: number;
    comment: string;
    create_at: Date;
    id: number;
    married: number;
    name: string;
}

export default async function Page() {
    const sql = "select * from users";
    const data = await executeQuery(sql, "");
    const getData = JSON.parse(JSON.stringify(data));
    console.log(getData);
    return (
        <div className="w-screen h-screen bg-black">
            <div>
                {getData.map((data, i) => {
                    return (
                        <p className="bg-black" key={i}>
                            {data.id} {data.name}
                        </p>
                    )
                })}
            </div>
        </div >
    )
}