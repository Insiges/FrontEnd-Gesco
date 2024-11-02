import { create } from "zustand";

export const useUserInfos = create((set) => ({
	userType: "",
	userInfos: {
		dados: {
			id: null,
			nome: "",
			foto: "",
			cpf: "",
			data_nascimento: "",
			id_email: null,
			email: "",
			id_telefone: null,
			telefone: "",
			sexo: "",
			id_endereco: null,
			logradouro: "",
			cep: "",
			bairro: "",
			numero: "",
			complemento: "",
			id_cidade: null,
			cidade: "",
			sigla_estado: "",
			id_estado: null,
			nome_estado: "",
		},
		disciplinas: [
			{
				id: null,
				nome: "",
			},
		],
		diplomas: [
			{
				id: null,
				curso: "",
				faculdade: "",
				professor: "",
				id_tipo_graduacao: null,
			},
		],
	},
	setUserInfos: (userInfos) =>
		set((state) => ({
			userInfos: {
				...state.userInfos,
				...userInfos,
			},
		})),
	setDados: (dados) =>
		set((state) => ({
			userInfos: {
				...state.userInfos,
				dados: { ...state.userInfos.dados, ...dados },
			},
		})),
	setDisciplinas: (disciplinas) =>
		set((state) => ({
			userInfos: {
				...state.userInfos,
				disciplinas,
			},
		})),
	setDiplomas: (diplomas) =>
		set((state) => ({
			userInfos: {
				...state.userInfos,
				diplomas,
			},
		})),
	setUserType: (type) => set({ userType: type }),
}));

export default useUserInfos;
