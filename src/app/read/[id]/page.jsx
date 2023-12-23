export default async function Read(props) {
  const resp = await fetch(`http://localhost:8888/topics/${props.params.id}`);
  const topic = await resp.json();

  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
