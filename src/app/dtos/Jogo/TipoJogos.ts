import Jogo from "./Jogo";

class Acao extends Jogo {
  constructor(dados: Jogo) {
    const {
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel,
    } = dados;
    super(
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel
    );
  }

  calcularValor(): number {
    return this.valor * 1.2;
  }

  toString(): string {
    return `Jogo de Ação: ${this.nome}`;
  }
}

class Aventura extends Jogo {
  constructor(dados: Jogo) {
    const {
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel,
    } = dados;
    super(
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel
    );
  }

  calcularValor(): number {
    return this.valor * 1.15;
  }

  toString(): string {
    return `Jogo de Aventura: ${this.nome}`;
  }
}

class RPG extends Jogo {
  constructor(dados: Jogo) {
    const {
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel,
    } = dados;
    super(
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel
    );
  }

  calcularValor(): number {
    return this.valor * 1.25;
  }

  toString(): string {
    return `Jogo de RPG: ${this.nome}`;
  }
}

class Esporte extends Jogo {
  constructor(dados: Jogo) {
    const {
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel,
    } = dados;
    super(
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel
    );
  }

  calcularValor(): number {
    return this.valor * 1.1;
  }

  toString(): string {
    return `Jogo de Esporte: ${this.nome}`;
  }
}

class Corrida extends Jogo {
  constructor(dados: Jogo) {
    const {
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel,
    } = dados;
    super(
      codigo,
      nome,
      descricao,
      desenvolvedora,
      dataLancamento,
      valor,
      requisitosMinimos,
      avaliacao,
      comentarios,
      disponivel
    );
  }

  calcularValor(): number {
    return this.valor * 1.18;
  }

  toString(): string {
    return `Jogo de Corrida: ${this.nome}`;
  }
}

export { Acao, Aventura, RPG, Esporte, Corrida };

