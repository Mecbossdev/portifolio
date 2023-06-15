import { ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'CRUD',
      description:
        'Aplicativo CRUD desenvolvido em React-native com rotas Get, Post do consumo de APIRESTful.',
      image: 'img/crud.png',
      link: 'https://github.com/Mecbossdev/app-placehoder-crud',
      coldSpan: 'col-span-1',
    },
    {
      title: 'E-ecommerce',
      description:
        'E-commerce desenvolvido em Nextjs e integrado com API REST.',
      image: 'img/eecommerce.png',
      link: 'https://github.com/Mecbossdev/app-delivery',
      coldSpan: 'col-span-1 md:col-span-2',
    },
    {
      title: 'Verificador',
      description:
        'Projeto verificador de pagamento de envio de email e integrado com back-end do nodejs.',
      image: 'img/verify.png',
      link: 'https://github.com/Mecbossdev/verify-count',
      coldSpan: 'col-span-1',
    },
    {
      title: 'Loteria',
      description:
        'Aplicativo desenvolvido em Swift, que faz entrega de variações lotericas.',
      image: 'img/megasenna.png',
      link: 'https://github.com/Mecbossdev/loteria',
      coldSpan: 'col-span-1',
    },
    {
      title: 'To-do',
      description:
        'To-do-List com funcionalidades de adcionar remover e atualizar tarefa.',
      image: 'img/todo.png',
      link: 'https://github.com/Mecbossdev/to-do-react-ts',
      coldSpan: 'col-span-1',
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-r from-purple-900 via-blue-900 to-gray-500 bg-cover md:rounded-tl-[180px] ">
        <div className="container mx-auto max-w-4xl bg-[url(../assets/bg-stars.svg)] bg-cover p-4 py-12 ">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 font-alt text-3xl font-bold">
              <span className="mr-2"> Projetos &</span>
              <span className="text-blue-500">Portifolios</span>
            </h2>
            <p className="relative text-lg text-gray-200">
              Alguns dos projetos pessoais e que já realizei ao longo da
              trajetoria com programador.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.coldSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-800 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <p className="mb-4 text-center text-sm text-gray-200">
                    {project.description}
                  </p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-6 w-6 " />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
