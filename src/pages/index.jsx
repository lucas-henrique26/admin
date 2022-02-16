import Layout from "../components/template/Layout"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline"></h1>
      <Layout titulo="Página Inicial" subtitulo="Estamos construindo um template admin">
        <h3>Conteudo!</h3>
      </Layout>
    </div>
  )
}
