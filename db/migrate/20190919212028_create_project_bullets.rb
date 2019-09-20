class CreateProjectBullets < ActiveRecord::Migration[5.2]
  def change
    create_table :project_bullets do |t|
      t.integer :project_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :project_bullets, :project_id
  end
end
