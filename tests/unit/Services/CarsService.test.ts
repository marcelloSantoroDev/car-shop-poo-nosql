import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';
// import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

const car: ICar = {
  id: '64497e0d8e1e7812bb39cea4',
  model: 'BISONaaaaaaaaaaaaaaaaaaaaA',
  year: 2001,
  color: 'grey',
  status: true,
  buyValue: 30.000,
  doorsQty: 4,
  seatsQty: 600,
};

const carsService = new CarsService();
// const carMock = new Car(car);

describe('testes da camada services de Cars', function () {
  describe('listagem de carros', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('lista todos os carros com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'find').resolves([car]);
      // act
      const result = await carsService.getAll();
      // assert
      expect(result.type).to.be.equal(null);
    });
    it('lista carro a partir do seu ID com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'findById').resolves(car);
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
});