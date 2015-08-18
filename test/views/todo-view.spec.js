import jQuery from 'jquery';
import {_} from 'underscore';

import TodoCollection from '../../src/js/collections/todos';
import TodoView from '../../src/js/views/todo-view';
import TodoModel from '../../src/js/models/todo';

describe('TodoView', function(){
  beforeEach(function(){
    this.model = new TodoModel({
      title: 'Julie writes test',
      completed: false
    });
    this.view = new TodoView({
      model: this.model
    });
    this.view.render();
  });

  it('should return the Todo item', function() {
    expect(this.view.render()).toEqual(this.view);
  });

  it('Should be tied to a DOM element when created, based off the property provided.', function() {
      expect(this.view.el.tagName.toLowerCase()).toBe('li');
  });

  it('onToggle() should toggle the state of the Todo item when clicked', function() {
    let e = jQuery.Event('click', 'checked');

    this.view.trigger(e);

    // this.view.$('.toggle').trigger('click');
    expect(this.view.model.get('completed')).toBe(true);

  });

  it('onDestroy() should destroy the Todo item when clicked', function() {
    this.view.$('.destroy').trigger('click');
    expect(this.view.$('button').length).toEqual(0);
  });

  it('double clicking on the title should add a class of editing to the Todo', function() {
    let $input = this.view.$('label');
    let e = jQuery.Event('dblclick');
    $input.addClass(e);

    // this.view.$('label').trigger('dblclick');
    expect(this.view.$('li')).toHaveClass('.editing');
  });
});
