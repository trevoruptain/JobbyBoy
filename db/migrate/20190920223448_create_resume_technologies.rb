class CreateResumeTechnologies < ActiveRecord::Migration[5.2]
  def change
    create_table :resume_technologies do |t|
      t.string :resume_id
      t.string :technology_id

      t.timestamps
    end

    add_index :resume_technologies, :resume_id
    add_index :resume_technologies, :technology_id
  end
end
