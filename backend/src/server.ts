import express from 'express';
import mongoose from 'mongodb';
import dotenv from 'dotenv';
import 'reflect-metadata';
import peopleRoutes from './routes/people.routes';

dotenv.config();
const port = process.env.PORT
const db = process.env.DB_URL
const app = express()

mongoose.connect(`${db}`, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(() => {
  console.log(`📦 Database connected`)
},
error => {
  console.log(`Database error: ${error}`)
})

app.use(express.json())
app.use('/api', peopleRoutes)
app.listen(port || 5000, () => {
    console.log(`👽 Server running in port ${port}!`)
})

const PEOPLES = [
 { nome: 'Maria', sobrenome: 'Madalena', idade: 35, cidadeEstado: 'Varginha-MG', profissao: 'Dentista', salario: '3800.55' },
 { nome: 'Rafaela', sobrenome: 'Rodrigues', idade: 21, cidadeEstado: 'Divinópolis-MG', profissao: 'Estudante', salario: '680.44'  },
 { nome: 'Edson', sobrenome: 'Soares', idade: 27, cidadeEstado: 'São Paulo-SP', profissao: 'Estágiario',  salario: '1250.12'  },
 { nome: 'Patricia', sobrenome: 'Vidal', idade: 22, cidadeEstado: 'Osasco-SP', profissao: 'Desenvolvedora',  salario: '3651.54'  },
 { nome: 'Carlos', sobrenome: 'Silva', idade: 41, cidadeEstado: 'Rio de Janeiro-RJ', profissao: 'Deputado', salario: '16351.36'  },
 { nome: 'Felipe', sobrenome: 'Batista', idade: 55, cidadeEstado: 'Campo Belo-MG', profissao: 'Estudante', salario: '0'  },
 { nome: 'Emerson', sobrenome: 'Henrique', idade: 23, cidadeEstado: 'Aguanil-MG', profissao: 'QA', salario: '2987.21'  },
 { nome: 'Fabricio', sobrenome: 'Parreira', idade: 33, cidadeEstado: 'Lavras-MG', profissao: 'Advogado', salario: '2100.00'  },
 { nome: 'Arnaldo', sobrenome: 'Biços', idade: 33, cidadeEstado: 'Ubatuba-SP', profissao: 'Desempregado', salario: '0'  },
 { nome: 'Joseph', sobrenome: 'Alencar', idade: 33, cidadeEstado: 'Ubatuba-SP', profissao: 'Desempregado', salario: '0'  },
 { nome: 'Cristina', sobrenome: 'Fonseca', idade: 33, cidadeEstado: 'Rio Branco-AC', profissao: 'Juiza', salario: '45655.10'  },
 { nome: 'Enzo', sobrenome: 'Guedes', idade: 33, cidadeEstado: 'Criciuma-SC', profissao: 'Fotográfo', salario: '7200.25'  },
 { nome: 'Thales', sobrenome: 'Silveira', idade: 33, cidadeEstado: 'Guarapari-ES', profissao: 'CEO', salario: '11550.15'  }
]
