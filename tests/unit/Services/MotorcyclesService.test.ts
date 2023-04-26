import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';

const motorcycleDomain: IMotorcycle = {
  id: '64497e0d8e1e7812bb39cea4',
  model: 'bis',
  year: 2001,
  color: 'grey',
  status: true,
  buyValue: 30.000,
  category: 'street',
  engineCapacity: 600,
};

const motorcycleMongoose: IMotorcycle = {
  _id: '64497e0d8e1e7812bb39cea4',
  model: 'bis',
  year: 2001,
  color: 'grey',
  status: true,
  buyValue: 30.000,
  category: 'street',
  engineCapacity: 600,
};

const motorcycleWithoutId: IMotorcycle = {
  model: 'bis',
  year: 2001,
  color: 'grey',
  status: true,
  buyValue: 30.000,
  category: 'street',
  engineCapacity: 600,
};

const motorcyclesService = new MotorcyclesService();

describe('testes da camada services de Motorcycles', function () {
  describe('listagem de motos', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('lista todas as motos com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'find').resolves([motorcycleDomain]);
      // act
      const result = await motorcyclesService.getAll();
      // assert
      expect(result.type).to.be.equal(null);
    });
    it('lista moto a partir do seu ID com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'findById').resolves(motorcycleDomain);
      // act
      const result = await motorcyclesService.getById('64497e0d8e1e7812bb39cea4');
      // assert
      expect(result.type).to.be.equal(null);
    });
    it('erro de moto não encontrada', async function () {
      // arrange
      sinon.stub(Model, 'findById').resolves(undefined);
      // act
      const result = await motorcyclesService.getById('64497e0d8e1e7812bb39poo3');
      // assert
      expect(result.message).to.be.equal('Motorcycle not found');
    });
  });
  describe('criação de motos', function () {
    it('cria uma moto com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'create').resolves(motorcycleMongoose);
      // act
      const result = await motorcyclesService.create(motorcycleWithoutId);
      // assert
      expect(result).to.be.deep.equal(motorcycleDomain);
    });
  });
});