import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';
import ICar from '../../../src/Interfaces/ICar';

const carDomain: ICar = {
  id: '64497e0d8e1e7812bb39cea4',
  model: 'palio',
  year: 2001,
  color: 'grey',
  status: true,
  buyValue: 30.000,
  doorsQty: 4,
  seatsQty: 600,
};

const carMongoose: ICar = {
  _id: '64497e0d8e1e7812bb39cea4',
  model: 'palio',
  year: 2001,
  color: 'grey',
  status: true,
  buyValue: 30.000,
  doorsQty: 4,
  seatsQty: 600,
};

const carWithoutId: ICar = {
  model: 'palio',
  year: 2001,
  color: 'grey',
  status: true,
  buyValue: 30.000,
  doorsQty: 4,
  seatsQty: 600,
};

const carsService = new CarsService();

describe('testes da camada services de Cars', function () {
  describe('listagem de carros', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('lista todos os carros com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'find').resolves([carDomain]);
      // act
      const result = await carsService.getAll();
      // assert
      expect(result.type).to.be.equal(null);
    });
    it('lista carro a partir do seu ID com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'findById').resolves(carDomain);
      // act
      const result = await carsService.getById('64497e0d8e1e7812bb39cea4');
      // assert
      expect(result.type).to.be.equal(null);
    });
    it('erro de carro não encontrado', async function () {
      // arrange
      sinon.stub(Model, 'findById').resolves(undefined);
      // act
      const result = await carsService.getById('64497e0d8e1e7812bb39poo3');
      // assert
      expect(result.message).to.be.equal('Car not found');
    });
  });
  describe('criação de carros', function () {
    it('cria um carro com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'create').resolves(carMongoose);
      // act
      const result = await carsService.create(carWithoutId);
      // assert
      expect(result).to.be.deep.equal(carDomain);
    });
  });
});