import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';

const motorcycle: IMotorcycle = {
  id: '64497e0d8e1e7812bb39cea4',
  model: 'BISONaaaaaaaaaaaaaaaaaaaaA',
  year: 2001,
  color: 'grey',
  status: true,
  buyValue: 30.000,
  category: 'street',
  engineCapacity: 6,
};

const motorcyclesService = new MotorcyclesService();

describe('testes da camada services de Motorcycles', function () {
  describe('listagem de carros', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('lista todos os carros com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'find').resolves([motorcycle]);
      // act
      const result = await motorcyclesService.getAll();
      // assert
      expect(result.type).to.be.equal(null);
    });
    it('lista carro a partir do seu ID com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'findById').resolves(motorcycle);
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
});