import AdminLayout from "../../layouts/AdminLayout";

const Setting = () => {
  return (
    <AdminLayout>
      <div>
        <div>
          <form action=''>
            <label htmlFor='shopName'>Shop Name</label>
            <input type='text' name='' id='shopName' />
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Setting;
