import { Laptop, ServerCog, Smartphone } from 'lucide-react'

interface ServicesProps {}

export function Services(props: ServicesProps) {
  const services = [
    {
      title: 'Web',
      description:
        'Desenvolvimento de sites e sistemas web estáticos e dinamicos com React.js, Next.js, HTML5 e CSS3',
      icon: <Laptop className="h-12 w-12" />,
    },
    {
      title: 'Sistemas',
      description: 'Desenvolvimento de sistemas e API REST com Node.js',
      icon: <ServerCog className="h-12 w-12" />,
    },
    {
      title: 'Mobile',
      description:
        'Desenvolvimento de aplicativos Android e IOS com React-native',
      icon: <Smartphone className="h-12 w-12" />,
    },
  ]

  return (
    <section className="mx auto max-w-4x1 my-12 p-4">
      <div className="p-4 text-center">
        <p className="text-sm uppercase ">O que faço de melhor</p>

        <h2 className="mb-2 font-alt text-4xl font-bold ">
          <span className="text-3x1 mr-2 font-alt">Meus</span>
          <span className="font-alt">Serviços</span>
        </h2>

        <p className="text-sm">
          Posso atender uma gama completa de serviços, do front-end ao back-end
          com bancos de dados e sistemas
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {services?.map((item, index) => (
          <div className="basis-1/3 rounded-lg bg-blue-800 p-4" key={index}>
            <div className="mb-2">{item.icon}</div>
            <h3 className="text-x1 font-bold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
