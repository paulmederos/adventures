class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title
      t.datetime :posted

      t.timestamps
    end
  end
end
