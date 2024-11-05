import image01 from "../../../assets/landingPage/image01.png";
import image02 from "../../../assets/landingPage/image02.png";
import image03 from "../../../assets/landingPage/image03.png";
import Card from "./card";

const SecondSection = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full text-center md:text-left">
				<h1 className="text-4xl text-[#FFB400] font-bold mt-8 md:ml-32">
					Melhore Sua Gestão
				</h1>
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mt-5 w-full md:w-auto mx-32">
				<Card
					imageSrc={image01}
					title="Mais Tempo para Ensinar"
					text={
						<>
							Nossa plataforma é projetada para minimizar a carga burocrática.
							Ao automatizar tarefas administrativas, como matrículas, geração
							de relatórios e controle de frequência, nossa plataforma permite
							que professores e gestores dediquem mais tempo às atividades
							pedagógicas.
							<br />
							<br />
							Com uma interface intuitiva e funcionalidades que centralizam as
							informações, o Gesco elimina processos manuais e reduz erros,
							acelerando a tomada de decisões.
						</>
					}
				/>
				<Card
					imageSrc={image02}
					title="Produtividade aos Professores"
					text={
						<>
							O Gesco oferece uma gama de funcionalidades que tornam a vida dos
							professores mais prática e eficiente. Com nossa plataforma, você
							pode agendar salas de aula, postar atividades e realizar chamadas
							com apenas alguns cliques, tudo isso em um único ambiente
							intuitivo e organizado.
							<br />
							<br />
							Essa integração de ferramentas não só otimiza sua rotina, mas
							também promove um ambiente colaborativo que enriquece a
							experiência de ensino.
						</>
					}
				/>
				<Card
					imageSrc={image03}
					title="Benefícios para os Alunos"
					text={
						<>
							O Gesco foi desenvolvido para melhorar a experiência educacional
							dos alunos, tornando o aprendizado mais acessível e interativo.
							Com nossa plataforma, os estudantes podem acessar todas as
							atividades e materiais didáticos em um único lugar.
							<br />
							<br />
							Com nosso software, os alunos têm a oportunidade de se tornarem
							protagonistas de seu aprendizado, desenvolvendo autonomia e
							responsabilidade.
						</>
					}
				/>
			</div>
		</div>
	);
};

export default SecondSection;
