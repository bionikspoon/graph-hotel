class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.integer :floor
      t.string :name
      t.boolean :occupied
      t.boolean :smoking
      t.boolean :pets
      t.integer :beds
      t.integer :max_occupancy

      t.timestamps
    end
  end
end
