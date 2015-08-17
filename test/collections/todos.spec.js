import TodosCollection from '../../src/js/collections/todos'
import TodoModel from '../../src/js/models/todo'

describe('TodosCollection', function() {
  beforeEach(function() {
    this.collection = new TodosCollection();
  });

  it('should not have any models when created with no data', function() {
    expect(this.collection.length).toEqual(0);
  });

  it('should add a TodoModel with defaults when an empty object is added', function() {
    let data = {};
    // add new model to the collection
    this.collection.add(data);

    // find model in collection (should only have one)
    let model = this.collection.at(0);

    expect(this.collection.length).toEqual(1);
    expect(model.get('title')).toEqual('');
    expect(model.get('completed')).toEqual(false);
  });

  it('add new TodoModels when data is added to the collection', function() {
    let data = {
      title: 'Will heals',
      completed: false
    };
    // add new model to the collection
    this.collection.add(data);

    // find model in collection (should only have one)
    let model = this.collection.at(0);

    expect(this.collection.length).toEqual(1);
    expect(model.get('title')).toEqual('Will heals');
    expect(model.get('completed')).toEqual(false);
  });

  it('add new TodoModels when an array is added to the collection', function() {
    let data1 = {
      title: 'Will heals',
      completed: false
    };
    let data2 = {
      title: 'Julie',
      completed: true
    };
    // add new model to the collection
    this.collection.add([data1, data2]);

    // find model in collection (should only have one)
    let model1 = this.collection.at(0);
    let model2 = this.collection.at(1);

    expect(this.collection.length).toEqual(2);
    expect(model1.get('title')).toEqual('Will heals');
    expect(model1.get('completed')).toEqual(false);

    expect(model2.get('title')).toEqual('Julie');
    expect(model2.get('completed')).toEqual(true);
  });

});
