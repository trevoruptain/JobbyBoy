class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :start, null: false
      t.string :end, null: false
      t.string :company_name, null: false
      t.string :user_id, null: false

      t.timestamps
    end
  end
end
